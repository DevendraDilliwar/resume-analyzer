"use server";

import { createClient } from "@/lib/supabase/server";

export async function contactSupport(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  console.log("Contact Support Submission:", { name, email, subject, message });

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("contact_requests").insert({
    name,
    email,
    subject,
    message,
  });

  if (error) {
    console.error("Error submitting contact request:", error);
    return { error: "Failed to send message. Please try again later." };
  }

  return {
    success:
      "Your message has been sent successfully! We will get back to you soon.",
  };
}
