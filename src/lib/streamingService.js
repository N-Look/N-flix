/**
 * ============================================================
 * EMBED SOURCES CONFIGURATION
 * ============================================================
 * 
 * HOW TO ADD A NEW SOURCE:
 * 
 * 1. Add a new object to the EMBED_SOURCES array below
 * 2. Each source needs:
 *    - name: Display name for the source
 *    - movieUrl: Function that takes (tmdbId) and returns the embed URL
 *    - tvUrl: Function that takes (tmdbId, season, episode) and returns the embed URL
 */

const EMBED_SOURCES = [
  {
    name: "vidlink",
    movieUrl: (tmdbId) => `https://vidlink.pro/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://vidlink.pro/tv/${tmdbId}/${season}/${episode}`,
  },
  {
    name: "videasy",
    movieUrl: (tmdbId) => `https://player.videasy.net/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://player.videasy.net/tv/${tmdbId}/${season}/${episode}`,
  },
  {
    name: "vidify",
    movieUrl: (tmdbId) => `https://player.vidify.top/embed/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://player.vidify.top/embed/tv/${tmdbId}/${season}/${episode}`,
  },
  {
    name: "vidsrc.cc",
    movieUrl: (tmdbId) => `https://vidsrc.cc/v2/embed/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://vidsrc.cc/v2/embed/tv/${tmdbId}/${season}/${episode}`,
  },
  {
    name: "vidcore",
    movieUrl: (tmdbId) => `https://vidcore.net/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://vidcore.net/tv/${tmdbId}/${season}/${episode}`,
  },
  {
    name: "vidfast",
    movieUrl: (tmdbId) => `https://vidfast.pro/movie/${tmdbId}`,
    tvUrl: (tmdbId, season, episode) => `https://vidfast.pro/tv/${tmdbId}/${season}/${episode}`,
  },

  // ============================================================
  // ADD NEW SOURCES BELOW - Copy this template:
  // ============================================================
  // {
  //   name: "source-name",
  //   movieUrl: (tmdbId) => `https://example.com/movie/${tmdbId}`,
  //   tvUrl: (tmdbId, season, episode) => `https://example.com/tv/${tmdbId}/${season}/${episode}`,
  // },
];

// ============================================================
// HELPER FUNCTIONS - No need to modify these
// ============================================================

export function getMovieEmbed(tmdbId, sourceIndex = 0) {
  const source = EMBED_SOURCES[sourceIndex] || EMBED_SOURCES[0];
  return {
    url: source.movieUrl(tmdbId),
    sourceName: source.name,
    sourceIndex,
    totalSources: EMBED_SOURCES.length,
  };
}

export function getTvShowEmbed(tmdbId, season, episode, sourceIndex = 0) {
  const source = EMBED_SOURCES[sourceIndex] || EMBED_SOURCES[0];
  return {
    url: source.tvUrl(tmdbId, season, episode),
    sourceName: source.name,
    sourceIndex,
    totalSources: EMBED_SOURCES.length,
  };
}

export function getNextSourceIndex(currentIndex) {
  return (currentIndex + 1) % EMBED_SOURCES.length;
}

export function getAllSources() {
  return EMBED_SOURCES.map((s, i) => ({ name: s.name, index: i }));
}
