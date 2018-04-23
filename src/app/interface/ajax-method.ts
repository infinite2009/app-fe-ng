export interface AjaxMethod {
    uri: string;
    adapter: string;
    sync?: boolean;
    idempotent?: boolean;
    params?: object;
}
