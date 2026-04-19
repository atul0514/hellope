export const appName = "UdaaanPe"


export async function apiPost<TResponse, TPayload>(
    url: string,
    payload: TPayload,
    token?: string
): Promise<TResponse> {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Something went wrong");
    }

    return response.json();
}