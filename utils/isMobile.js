export function isMobile() {
    if (process.client) {
        return window.innerWidth < 1024;
    }
    return false;
}
