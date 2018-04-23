export interface TableValue {
    text: string;
    rawValue?: string | number; // 如果这是个操作单元格，那么它可以没有 rawValue
    options?: {}; // 如果这是个操作单元格，那么它必须要有这个
    type: string;
    components?: Array<{
        type: any,
        options: object
    }>;
}
