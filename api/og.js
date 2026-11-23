export const config = { runtime: "edge" };

// Keep legacy sharing URLs working without a second, outdated visual identity.
export default async function handler(request) {
  return Response.redirect(
    new URL("/generated/og-image.png", request.url),
    307,
  );
}
