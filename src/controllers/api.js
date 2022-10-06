const { api } = require("../services/api");

module.exports = {
  search: async (request, response) => {
    const { q } = request.query;

    if (!q) return response.status(400).json({ erro: "invalid search query string" });

    const { data: musicsData } = await api.get("/search", { params: { q } });

    const data = musicsData.data?.map((music) => {
      return {
        title: music.title_short,
        artist: music.artist.name,
        cover: music.album.cover,
        url: music.preview,
      };
    });

    return response.json(data);
  },
};
