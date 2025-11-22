import { component$, $, useSignal, useStore } from "@qwik.dev/core";
import { useNavigate } from "@qwik.dev/router";
import { Button } from "@/component/button";
import { UrlInput } from "@/component/input/url";
import "../style/global.css";
import "../style/home.css";

export default component$(() => {
    const nav = useNavigate();
    const isLoading = useSignal(false);
    const store = useStore({ url: "", error: "" });

    const handleSubmit = $(async (e: Event) => {
        e.preventDefault();
        console.log("handleSubmit");

        if (!store.url.trim()) {
            store.error = "URL required";
            return;
        }

        isLoading.value = true;
        try {
            let parsed;
            try {
                parsed = new URL(store.url.trim());
            } catch {
                store.error = "Invalid URL";
                return;
            }
            const BASE_URL = import.meta.env.PUBLIC_BASE_URL;
            if (!BASE_URL) {
                throw new Error("PUBLIC_BASE_URL is missing");
            }
            console.log("BASE_URL: ", BASE_URL);
            //new URL(store.url);
        } catch (err: any) {
            console.error(err);
            store.error = err.message || "Please enter a valid URL";
        } finally {
            isLoading.value = false;
        }
    });

    const handleKeyPress = $((e: KeyboardEvent) => {
        console.log("handleKeyPress");
        if (e.key === "Enter") handleSubmit(e);
    });

    return (
        <div class="home-container">
            <div class="home-box">
                <div class="home-header">
                    <h1>Any Download Manager</h1>
                </div>

                <form onSubmit$={handleSubmit} class="home-form">
                    <UrlInput
                        value={store.url}
                        onChange$={(v: any) => (store.url = v ?? "")}
                        onKeyPress$={handleKeyPress}
                        placeholder="Enter url"
                        error={store.error}
                        required
                    />

                    <Button type="submit" disabled={isLoading.value}>
                        {isLoading.value ? "Extracting..." : "Extract"}
                    </Button>
                </form>
            </div>
        </div>
    );
});
