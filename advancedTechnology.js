/**
 * 位置：公众号管理-数据统计-自定义列
 * 效果：判断全选和非全选
 * 高光：
 *          1. computed传递参数
 *          2. 循环传递参数动态生成多个computed
 */
const calcStatus = computed(() => {
  return (type) => props.columnData[type].every((item) => item.checked);
});

/**
 * 位置：功能管理-批量建计划-
 * 效果：自定义tag回显
 * 高光：
 *          1. onMounted和nextTick的配合使用
 */
onMounted(() => {
  nextTick(() => {
    props.iValue.map((item) => {
      addItem(item);
    });
  });
});
/**
 * 位置：功能管理-批量建计划
 * 效果：父组件调用子组件方法（保存按钮）
 * 高光：
 *          1. defineExpose （为了使用draw组件，按钮必须在组件外面
 */

// <n-drawer
//   :drawer-class="'drawer-footer-color'"
//    width="800"
//    v-model:show="showBaseInfo"
// >
//  <n-drawer-content style="background: #FAFAFA" title="项目基本信息" closable>
//    <base-info ref="baseInfoRef" />
//    <template #footer>
//      <div class="footer-btn">
//        <n-button type="primary" @click="() => baseInfoSubmit()">确认</n-button>
//        <n-button class="ml-10" @click="showBaseInfo = false">取消</n-button>
//      </div>
//    </template>
//  </n-drawer-content>
//</n-drawer>

/**
 * 位置：功能管理-批量建计划
 * 效果：验证form
 * 高光：
 *          1. 嵌套对象的验证（自己在标签上写path验证，写在rules对象中不知道是否支持；你可以把所有验证都写在一个验证方法中，也可以写多个方法分别去验证）
 *          2. 动态表单的验证（path属性中多传一个index属性即可）
 */
// <n-form-item
//   label="投放时间："
//   :path="'delivery_setting,schedule_type'"
//   :rule="{
//     required: true,
//     validator: validatorDiyOptions,
//     trigger: ['input', 'blur']
//   }"
// >
const validatorDiyOptions = (rule, value) => {
  const [obj, attr] = rule.field.split(","); // 获取对象和对象下的属性值
  if (form.value[obj][attr] === "MANUAL") {
    if (selectMaterialItems.value.length > 0) {
      return true;
    } else {
      return new Error("请选择");
    }
  } else if (form.value[obj][attr] === "SCHEDULE_START_END") {
    if (form.value[obj]["time"]) {
      return true;
    } else {
      return new Error("请选择");
    }
  } else {
    return true;
  }
};
