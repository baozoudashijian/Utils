// 大于0且可以保留小数点后两位
const validatorNumRules = (rule, value) => {
    if (value) {
        if (value <= 0) {
            return new Error("请输入大于0的数！");
        }
        let parts = value.toString().split(".");
        if (parts.length > 1) {
            if (parts[1].length > 2) {
                // 小数位数超过1位，截取小数点后一位
                return new Error("只能输入小数点后两位！");
            }
        }
        return true
    } else {
        return new Error('上报最低金额不能为空')
    }
}
// 只能输入正整数
const validatorNumRules2 = (rule, value) => {
    if (value) {
        let pattern = /^\d+$/; // 正则表达式：只包含数字字符，且至少有一个数字
        if (pattern.test(value)) {
            return true
        } else {
            return new Error('上报订单转化不漏只能输入正整数')
        }
    } else {
        return new Error('上报订单转化不漏不能为空')
    }
}
// 只能输入正整数
const validatorNumberRule3 = (e) => {
    if (e.length == 1) {
        form.value.customize_hours = e.replace(/[^1-9]/g, '')
    } else {
        form.value.customize_hours = e.replace(/\D/g, '')
    }
}