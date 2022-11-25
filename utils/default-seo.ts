import { DefaultSeoProps } from "next-seo";

const defaultSeoSettings: DefaultSeoProps = {
  titleTemplate: "Aditya Rathod | %s",
  defaultTitle: "Aditya Rathod",
  description:
    "A senior computer science college student interested in solving problems at scale with data.",
  themeColor: "#070d2c",
  openGraph: {
    type: "website",
    siteName: "Aditya Rathod",
    profile: {
      firstName: "Aditya",
      lastName: "Rathod",
    },
    images: [
      {
        url: "https://adityarathod.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Rathod wordmark",
      },
    ],
  },
};

export default defaultSeoSettings;
