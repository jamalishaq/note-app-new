"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

type FormState = {
  message?: string;
  errors?: {
    email?: string;
    password?: string;
  };
};

export async function login(state: FormState | undefined, formData: FormData) {
  const schema = z.object({
    email: z
      .string()
      .nonempty("Please enter an email")
      .email("Invalid email address"),

    password: z.string().nonempty("Please enter a password"),
  });

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const formattedErrors = validatedFields.error.flatten().fieldErrors;
    console.log(formattedErrors);

    return {
      errors: {
        email: formattedErrors.email?.[0] || "",
        password: formattedErrors.password?.[0] || "",
      },
    };
  }

  try {
    const { email, password } = validatedFields.data;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        errors: {
          email: "You are not a registered user",
        },
      };
    }

    if (user.password !== password) {
      return {
        errors: {
          password: "Incorrect password",
        },
      };
    }

    return {
      message: "success"
    }
  } catch (error) {
    console.error(error);
    return { message: "Error registering..." };
  }
}

export async function signUp(state: FormState | undefined, formData: FormData) {
  const schema = z.object({
    email: z
      .string()
      .nonempty("Please enter an email")
      .email("Invalid email address"),

    password: z
      .string()
      .nonempty("Please enter a password")
      .min(8, "Password must be at least 8 characters"),
  });

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const formattedErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        email: formattedErrors.email?.[0] || "",
        password: formattedErrors.password?.[0] || "",
      },
    };
  }

  try {
    const { email, password } = validatedFields.data;
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return {
        errors: {
          email: "Email taken",
        },
      };
    }

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "Error registering..." };
  }

  redirect("/login");
}

export async function forgetPassword(
  state: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });

  const schema = z
    .string()
    .nonempty("Please enter an email")
    .email({ message: "Enter a valid email" });

  const validatedFields = schema.safeParse(formData.get("email"));

  if (!validatedFields.success) {
    return {
      errors: {
        email: validatedFields.error.errors[0].message,
      },
    };
  }

  try {
    const { data: email } = validatedFields;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        errors: {
          email: "You are not a registered user",
        },
      };
    }
    console.log(email)
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
      to: `${email}`,
      subject: "Hello ✔",
      text: "Hello world?", // plain‑text body
      html: "<b>Hello world?</b>", // HTML body
    });


    if (info.rejected) {
      console.log("Message sent:", info.response,);
      return {
        message: "success",
      };

    } else {
      return {message: "Network error!!!"}
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Server Error!!!",
    };
  }
}
