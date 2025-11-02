'use client';

import { useApp } from '@/contexts/AppContext';
import { useState } from 'react';

const ChangePassword = () => {
  const { setActiveTab } = useApp();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleVisibility = (field: 'old' | 'new' | 'confirm') => {
    if (field === 'old') setShowOld(!showOld);
    else if (field === 'new') setShowNew(!showNew);
    else setShowConfirm(!showConfirm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-6 w-full lg:max-w-lg h-fit">
      {/* Breadcrumb */}
      <button className="flex gap-2 items-center text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-3 lg:hidden" onClick={() => setActiveTab("settings")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd" />
        </svg>
        <span>Settings</span>
      </button>

      <h1 className="text-neutral-950 dark:text-neutral-0 font-semibold mb-6">Change Password</h1>

      {/* Old Password */}
      <div>
        <label className="block mb-1 text-sm font-medium text-neutral-950 dark:text-neutral-0">
          Old Password
        </label>
        <div className="relative">
          <input
            type={showOld ? 'text' : 'password'}
            className="w-full border border-neutral-300 dark:border-neutral-600 rounded-lg px-4 py-3 text-sm text-neutral-950 dark:text-neutral-0 outline-none"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => toggleVisibility('old')}
            className="absolute inset-y-0 right-2 flex items-center text-neutral-500 cursor-pointer"
          >
            {/* Icon show password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showOld ? 'hidden' : 'block'}>
              <path fill="#717784" fillRule="evenodd" d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316c1.332 0 2.412-1.037 2.412-2.316 0-1.28-1.08-2.315-2.412-2.315ZM8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43Z" clipRule="evenodd" /><path fill="#717784" fillRule="evenodd" d="M4.976 7.195A11.248 11.248 0 0 1 12.002 4.7a11.25 11.25 0 0 1 7.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237 0 1.86-1.2 3.797-2.976 5.237a11.249 11.249 0 0 1-7.026 2.493 11.248 11.248 0 0 1-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235Zm.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43c0 1.29.87 2.859 2.444 4.136a9.71 9.71 0 0 0 6.058 2.154 9.712 9.712 0 0 0 6.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137 0-1.291-.87-2.86-2.444-4.137a9.712 9.712 0 0 0-6.058-2.153 9.71 9.71 0 0 0-6.058 2.154Z" clipRule="evenodd" />
            </svg>
            {/* Icon Hide password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showOld ? 'block' : 'hidden'}>
              <path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36" /><path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.23 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.538 2.541M19.892 4.25 4.118 20.024" />
            </svg>
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="my-6">
        <label className="block mb-1 text-sm font-medium text-neutral-950 dark:text-neutral-0">
          New Password
        </label>
        <div className="relative">
          <input
            type={showNew ? 'text' : 'password'}
            className="w-full border border-neutral-300 dark:border-neutral-600 rounded-lg px-4 py-3 text-sm text-neutral-950 dark:text-neutral-0 outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => toggleVisibility('new')}
            className="absolute inset-y-0 right-2 flex items-center text-neutral-500 cursor-pointer"
          >
            {/* Icon show password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showNew ? 'hidden' : 'block'}>
              <path fill="#717784" fillRule="evenodd" d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316c1.332 0 2.412-1.037 2.412-2.316 0-1.28-1.08-2.315-2.412-2.315ZM8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43Z" clipRule="evenodd" /><path fill="#717784" fillRule="evenodd" d="M4.976 7.195A11.248 11.248 0 0 1 12.002 4.7a11.25 11.25 0 0 1 7.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237 0 1.86-1.2 3.797-2.976 5.237a11.249 11.249 0 0 1-7.026 2.493 11.248 11.248 0 0 1-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235Zm.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43c0 1.29.87 2.859 2.444 4.136a9.71 9.71 0 0 0 6.058 2.154 9.712 9.712 0 0 0 6.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137 0-1.291-.87-2.86-2.444-4.137a9.712 9.712 0 0 0-6.058-2.153 9.71 9.71 0 0 0-6.058 2.154Z" clipRule="evenodd" />
            </svg>
            {/* Icon Hide password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showNew ? 'block' : 'hidden'}>
              <path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36" /><path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.23 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.538 2.541M19.892 4.25 4.118 20.024" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 flex items-end gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063" /></svg>
          <span>At least 8 characters</span>
        </p>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block mb-1 text-sm font-medium text-neutral-950 dark:text-neutral-0">
          Confirm New Password
        </label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            className="w-full border border-neutral-300 dark:border-neutral-600 rounded-lg px-4 py-3 text-sm text-neutral-950 dark:text-neutral-0 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => toggleVisibility('confirm')}
            className="absolute inset-y-0 right-2 flex items-center text-neutral-500 cursor-pointer"
          >
            {/* Icon show password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showConfirm ? 'hidden' : 'block'}>
              <path fill="#717784" fillRule="evenodd" d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316c1.332 0 2.412-1.037 2.412-2.316 0-1.28-1.08-2.315-2.412-2.315ZM8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43Z" clipRule="evenodd" /><path fill="#717784" fillRule="evenodd" d="M4.976 7.195A11.248 11.248 0 0 1 12.002 4.7a11.25 11.25 0 0 1 7.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237 0 1.86-1.2 3.797-2.976 5.237a11.249 11.249 0 0 1-7.026 2.493 11.248 11.248 0 0 1-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235Zm.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43c0 1.29.87 2.859 2.444 4.136a9.71 9.71 0 0 0 6.058 2.154 9.712 9.712 0 0 0 6.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137 0-1.291-.87-2.86-2.444-4.137a9.712 9.712 0 0 0-6.058-2.153 9.71 9.71 0 0 0-6.058 2.154Z" clipRule="evenodd" />
            </svg>
            {/* Icon Hide password */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className={showConfirm ? 'block' : 'hidden'}>
              <path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36" /><path stroke="#717784" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.23 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.538 2.541M19.892 4.25 4.118 20.024" />
            </svg>
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-right mt-6">
        <button
          type="submit"
          className="cursor-pointer bg-blue-500 rounded-lg px-4 py-3 text-white text-sm font-medium"
        >
          Save Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
