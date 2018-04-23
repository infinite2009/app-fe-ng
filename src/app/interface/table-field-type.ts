/**
 * @file 表格字段类型常量
 * @author luodongyang(luodongyang@baidu.com)
 * @date 17/2/16.
 */
export const TABLE_FIELD_TYPES = {
    // 操作类型：表格这个字段没有值，只有对应的操作UI
    OPERATION: 'operation',
    // 数值：该字段需要格式化为逗号分隔字符串
    NUMBER: 'number',
    // 比率: 该字段需要格式化为带百分号的字符串
    RATIO: 'ratio',
    // 时间：该字段需要格式化为时间
    TIME: 'time',
    // 日期：该字段需要格式化为日期
    DATE: 'date',
    // 链接：该字段需要转换为a标签以便跳转
    LINK: 'link',
    // 过滤器：该字段不用来显示，而是用来决定该行数据是否显示
    FILTER: 'filter',
    // 默认：该字段是一般的字符串，无需处理
    DEFAULT: 'default'
};