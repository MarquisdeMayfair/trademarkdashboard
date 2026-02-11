import { euipoConfig, euipoGet } from "@/lib/euipo";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = new URLSearchParams(searchParams);

    const pageRaw = params.get("page");
    const sizeRaw = params.get("size");

    const page = Number.isFinite(Number(pageRaw))
      ? Math.max(0, Number(pageRaw))
      : 0;
    const size = Number.isFinite(Number(sizeRaw))
      ? Math.min(100, Math.max(10, Number(sizeRaw)))
      : 10;

    params.set("page", String(page));
    params.set("size", String(size));

    const data = await euipoGet("/trademarks", params);
    return Response.json({
      data,
      meta: {
        apiBase: euipoConfig.apiBase,
        params: Object.fromEntries(params.entries()),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      {
        error: "EUIPO request failed",
        message,
      },
      { status: 500 },
    );
  }
}
