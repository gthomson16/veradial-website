import { SITE_URL } from "./metadata";

export const EXPLAINER_VIDEO = {
  id: "dYBuhscT7TM",
  name: "VeraDial — AI that makes your calls",
  description:
    "A 60-second walkthrough of VeraDial: the AI assistant places a business call, handles the conversation, and hands back a transcript.",
  uploadDate: "2026-04-18",
  duration: "PT1M1S",
} as const;

export const EXPLAINER_VIDEO_THUMBNAIL = `https://i.ytimg.com/vi/${EXPLAINER_VIDEO.id}/maxresdefault.jpg`;
export const EXPLAINER_VIDEO_THUMBNAIL_FALLBACK = `https://i.ytimg.com/vi/${EXPLAINER_VIDEO.id}/hqdefault.jpg`;
export const EXPLAINER_VIDEO_WATCH_URL = `https://www.youtube.com/watch?v=${EXPLAINER_VIDEO.id}`;
export const EXPLAINER_VIDEO_EMBED_URL = `https://www.youtube.com/embed/${EXPLAINER_VIDEO.id}`;

export function buildExplainerVideoJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE_URL}#explainer-video`,
    name: EXPLAINER_VIDEO.name,
    description: EXPLAINER_VIDEO.description,
    thumbnailUrl: [EXPLAINER_VIDEO_THUMBNAIL, EXPLAINER_VIDEO_THUMBNAIL_FALLBACK],
    uploadDate: EXPLAINER_VIDEO.uploadDate,
    duration: EXPLAINER_VIDEO.duration,
    contentUrl: EXPLAINER_VIDEO_WATCH_URL,
    embedUrl: EXPLAINER_VIDEO_EMBED_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    isFamilyFriendly: true,
    mainEntityOfPage: pageUrl,
  };
}
