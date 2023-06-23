/**
 * 验证规则的展现形式
 * 1. 直接输入框禁止输入
 *      1.1. 输入数字框明显不能输入字母
 * 2. 输入后, 离开焦点去验证
 *      2.1. 不能大于某个数字
 * 3. 弹窗验证
 *
 */

// 之前验证分两种形式
// 1. type=number 加上 form rules验证规则
// 2. input限制

/**
 *  位置：渠道管理-上报设置-上报时间类型
 *  效果：只能输入正整数
 *  存在的问题：
 *              1. 可以输入--e
 *              2. 第一个字符可以是小数点
 *              3. 输入第二个字符把第一个字符覆盖掉
 * 改进后的缺点
 *              1. 输入框离开焦点验证不了
 *              2. 不能输入0
 */

const onlyInputNumber = (value, filed) => {
  form.value[filed] = e.replace(/\D/g, "").replace(/^0+/, "");
};

/**
 *  位置：渠道管理-上报设置-上报最低金额
 *  效果：输入保留两位小数
 *  存在的问题：
 *              1. 可以输入--e（去除使用type==number）
 *              2. 第一个字符可以是小数点
 *              3. 输入第二个字符把第一个字符覆盖掉
 * 改进后的缺点
 * 高光
 *              1. input输入配合表单验证（表单验证是否为空，input方法重置不能输入的格式）
 *
 */
const roundToTwoDecimalPlaces = (e, filed) => {
  // 去除第一个数字为0连续输入0
  if (/^0+/.test(e)) {
    e = e.replace(/0+/g, "0");
  }

  // 第一位不能输入小数点
  if (e.charAt(0) === ".") {
    e = e.slice(1);
  }
  // 移除非数字和小数点字符
  e = e.replace(/[^0-9.]/g, "");
  // 只保留一个小数点
  let decimalCount = 0;
  e = e.replace(/\./g, function (match) {
    decimalCount++;
    return decimalCount <= 1 ? match : "";
  });

  // 限制小数部分最多为两位
  const parts = e.split(".");
  if (parts[1] && parts[1].length > 2) {
    parts[1] = parts[1].slice(0, 2);
  }

  e = parts.join(".");

  form.value[filed] = e; // 更新输入框的值
};
/**
 *  位置：渠道管理-上报设置-订单转化不漏
 *  效果：只能输入正整数，包括0
 *  存在的问题：
 *              1. 输入没有任何限制，是等到脱离焦点再去验证
 *
 */
const isPositiveIntegerOrZero = (e, filed) => {
  // 第一个数字为0
  if (/^0+/.test(e)) {
    e = e.replace(/0+/g, "0");
  }
  // 第一个数字为0，不能在输入其他内容（因为是正整数，如果是小数可以输入小数点）
  if (e.length > 1 && e.charAt(0) === "0") {
    e = "0";
  }

  form.value[filed] = e.replace(/\D/g, "");
};

/**
 *  位置：渠道管理-上报设置-上报不过滤金额
 *  效果：保留两位小数，包括0
 *  存在的问题：
 *              1. 输入没有任何限制，是等到脱离焦点再去验证
  * 高光
 *              1. input限制基本规则（保留两位小数）form验证小于100以及为空
 *
 */