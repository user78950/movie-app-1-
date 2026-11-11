import { apiUrl, getAuthHeaders } from "./api.js";

export async function uploadMoviePoster(movieId, file) {
  const formData = new FormData();
  formData.append("poster", file);
  const response = await fetch(`${apiUrl}/api/movies/${movieId}/poster`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "포스터를 업로드하지 못했습니다.");
  return data;
}
