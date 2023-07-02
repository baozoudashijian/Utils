/**
 * 位置：公众号管理-数据统计-自定义列
 * 效果：数据按规则分类，筛选出选中的内容、选中的内容根据给出的顺序排序
 * 高光：
 *          1. res参数放在外层可以无限的累加，放在里层每次reduce会重置
 *
 * */
const objectKeyArray = () => {
  const res = [];
  const order = ["convert_num", "advertiser_name", "advertiser_id"];
  const foo = {
    account: [
      {
        label: "account",
        title: "账户数据",
        key: "advertiser_id",
        value: "账户id",
        checked: true,
      },
      {
        label: "account",
        title: "账户数据",
        key: "advertiser_name",
        value: "账户名称",
        checked: false,
      },
    ],
    transform: [
      {
        label: "transform",
        title: "转化数据",
        key: "convert_num",
        value: "转化数",
        checked: true,
      },
    ],
  };
  const allChecked = Object.values(foo)
    .flat()
    .filter((item) => item.checked);
  return order
    .map((item) => {
      return allChecked[allChecked.findIndex((k) => k.key === item)];
    })
    .filter((item) => item);
  // 这个方法花费了很多时间
  // reduce: 到底是reduce order还是reduce筛选出来的数组
  // return: return accumulator.push 错误，应该是先push然后return accumulator，但是filter可以这样做

  //   order.reduce((accumulator, cur) => {
  //     accumulator.push(...checkedItem.filter((item) => item.key == cur));
  //     return accumulator;
  //   }, res);
  // for(let key in foo) {
  //     const checkedItem = foo[key].filter(item => item.checked)
  //     order.reduce((accumulator, cur) => {
  //         accumulator.push(...checkedItem.filter((item) => item.key == cur))
  //         return accumulator
  //     }, res)
  // }
  // return res
};
/**
 * 位置：公众号管理-数据统计-自定义列
 * 效果：filter和some的配合使用
 * 高光：
 *          1. map返回true和false刚好和filter搭配（就是顺序还是会有问题）
 *
 * */
const filterAndSome = () => {
  const res = [];
  const order = ["convert_num", "advertiser_name", "advertiser_id"];
  const foo = {
    account: [
      {
        label: "account",
        title: "账户数据",
        key: "advertiser_id",
        value: "账户id",
        checked: true,
      },
      {
        label: "account",
        title: "账户数据",
        key: "advertiser_name",
        value: "账户名称",
        checked: false,
      },
    ],
    transform: [
      {
        label: "transform",
        title: "转化数据",
        key: "convert_num",
        value: "转化数",
        checked: true,
      },
    ],
  };
  const allChecked = Object.values(foo).flat();
  return allChecked.filter((item) => {
    return order.some((k) => item.checked && item.key == k);
  });
};
/**
 * 位置：功能管理-批量建计划-预览页面
 * 效果：使用reduce根据获取的id和已知的枚举值去匹配lable
 * 高光：
 *          1. map返回true和false刚好和filter搭配（就是顺序还是会有问题）
 *
 * */
const countPosition = (inventory_catalog, inventory_type) => {
  return inventoryTypeOptions.value
    .reduce((accumulator, cur) => {
      return accumulator.concat($state.delivery_range.inventory_type.map((item) => {
          if (item === cur.value) {
            return cur.label;
          }
        })
      );
    }, [])
    .filter((i) => i)
    .join(", ");
};
/**
 * 位置：功能管理-媒体素材库
 * 效果：使用reduce去除重复上传的内容
 * 高光：
 *          1. 根据重复id列表去除值
 * */
toRemoveRepeat = () => {
    // fileList.value选择的文件
    // exist_list 存在文件的id列表
    exist_list.reduce((accumulator, cur) => {
        return accumulator.filter((item) => item.md5 != cur)
    }, fileList.value)
}
/**
 * 位置：功能管理-媒体素材库
 * 效果：使用reduce去除重复一个对象数组
 * 高光：
 *          1.
 * */
const toRemoveRepeatObj = () => {
    let obj = {};
    return fileList.value.reduce((accumulator, cur) => {
        obj[cur.md5] ? '' : (obj[cur.md5] = true && accumulator.push(cur));
        return accumulator;
    }, []);
}