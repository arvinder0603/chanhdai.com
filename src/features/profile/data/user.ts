import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Arvinder Singh",
  lastName: "Nguyễn",
  displayName: "Arvinder Singh",
  username: "arvinder0603",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Frontend Engineer",
    "Open Source Contributor",
  ],
  address: "Gurgaon, Haryana, India",
  phoneNumber: "ODU4ODg4NDI3ODU=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2luZ2hhcnZpbmRlcjU5Mzk1QGdtYWkuY29t", // base64 encoded
  website: "https://arvinder.dev",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Wyzard.ai",
      website: "https://wyzard.ai",
    },
  ],
  about: `
Frontend Developer with hands-on experience building high-performance React applications. Delivered significant
 improvements in load times and bundle size through modern optimization techniques like code splitting and tree shaking.
 Developed reusable components and SDKs, and implemented analytics tracking using GA4 to support product insights.
  `,
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQG1tXh6tSIETg/profile-displayphoto-crop_800_800/B56ZkwEloWJ8AI-/0/1757448137928?e=1762387200&v=beta&t=Yw4s3mJq1QVbIBxEv16KDFBPh6nMYaBNmt-kwh_w16M",
  ogImage:
    "",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  keywords: ["arvinder0603", "Arvinder Singh"],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
