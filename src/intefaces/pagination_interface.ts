export type IPagination<DATA> = {
    total_items: string;
    total_pages: number;
    prev: string;
    next: string;
    items: DATA[]


}