'use client'

import { createContext, useContext, useReducer, ReactNode, useState } from "react";
import initialNotesData from '../public/data.json';

type Note = {
  id: number | null;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

type State = {
  allNotes: Note[];
  filteredNotes: Note[];
};

type NoteContextType = {
  notes: Note[];
  dispatch: (action: Action) => void;
  activeNote: Note | null;
  setActiveNote: (note: Note | null) => void;
  notesLength: number;
  tags: string[];
  lastNoteId: number | null;
  newNote: boolean;
  setNewNote: (value: boolean) => void;
};

type Action =
  | { type: 'save'; payload: Note }
  | { type: 'delete'; payload: { id: number | null } }
  | { type: 'filter'; payload: string }
  | { type: 'search'; payload: string }
  | { type: 'getNote'; payload: { id: number } };

export const NoteContext = createContext<NoteContextType | null>(null);

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNote must be used within a NoteProvider");
  }
  return context;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'save': {
      const noteExists = state.allNotes.some(note => note.id === action.payload.id);
      let updatedAllNotes;

      if (noteExists) {
        updatedAllNotes = state.allNotes.map(note =>
          note.id === action.payload.id ? action.payload : note
        );
      } else {
        updatedAllNotes = [...state.allNotes, action.payload];
      }

      return {
        allNotes: updatedAllNotes,
        filteredNotes: updatedAllNotes,
      };
    }

    case 'delete': {
      const updatedAllNotes = state.allNotes.filter(note => note.id !== action.payload.id);
      return {
        allNotes: updatedAllNotes,
        filteredNotes: updatedAllNotes,
      };
    }

    case 'filter': {
      const filter = action.payload.toLowerCase();
      if (filter === 'all') {
        return { ...state, filteredNotes: state.allNotes };
      }
      if (filter === 'archived') {
        return { ...state, filteredNotes: state.allNotes.filter(note => note.isArchived) };
      }
      return { ...state, filteredNotes: state.allNotes.filter(note => note.tags.some(tag => tag.toLowerCase() === filter)) };
    }

    case 'search': {
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        filteredNotes: state.allNotes.filter(note =>
          note.title.toLowerCase().includes(searchTerm) ||
          note.content.toLowerCase().includes(searchTerm) ||
          note.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        )
      };
    }

    case 'getNote': {
      const id = action.payload.id;
      return {
        ...state,
        filteredNotes: state.allNotes.filter(note => note.id === id)
      };
    }

    default:
      return state;
  }
};

// 🔍 Handle initialNotesData safely (prevent errors if undefined or empty)
const safeInitialNotesData: Note[] = Array.isArray(initialNotesData) ? initialNotesData as Note[] : [];

// Extract unique tags safely
const allTags = safeInitialNotesData.flatMap(note => note.tags ?? []).filter(Boolean);
const uniqueTags = [...new Set(allTags)];

// Initial state, fallback to empty if initialNotesData is empty
const initialState: State = {
  allNotes: safeInitialNotesData,
  filteredNotes: safeInitialNotesData,
};

const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeNote, setActiveNote] = useState<Note | null>(state.allNotes.length > 0 ? state.allNotes[0] : null);
  const [newNote, setNewNote] = useState<boolean>(false);

  // ✅ Handle edge case if allNotes is empty (lastNoteId is null)
  const lastNoteId = state.allNotes.length > 0 ? state.allNotes[state.allNotes.length - 1].id : null;

  const contextValue: NoteContextType = {
    notes: state.filteredNotes,
    dispatch,
    activeNote,
    setActiveNote,
    notesLength: state.filteredNotes.length,
    tags: uniqueTags,
    lastNoteId,
    newNote,
    setNewNote,
  };

  return (
    <NoteContext.Provider value={contextValue}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
