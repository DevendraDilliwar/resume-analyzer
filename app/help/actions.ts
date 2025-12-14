"use server";

export async function contactSupport(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact Support Submission:", { name, email, subject, message });

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  // Here you would typically save to database or send email
  
  return { success: "Your message has been sent successfully! We will get back to you soon." };
}
