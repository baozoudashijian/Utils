/**
 * 位置：公众号管理-数据统计-自定义列
 * 效果：判断全选和非全选
 * 高光：
 *          1. computed传递参数
 *          2. 循环传递参数动态生成多个computed
*/
const calcStatus = computed(() => {
    return (type) => props.columnData[type].every((item) => item.checked)
})

/**
 * 位置：功能管理-批量建计划-
 * 效果：自定义tag回显
 * 高光：
 *          1. onMounted和nextTick的配合使用
*/
onMounted(() => {
    nextTick(() => {
        props.iValue.map((item) => {
            addItem(item)
        })
    })
})