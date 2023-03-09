// 根据后端返回的权限拼接路由
const formatPermission = (path, arr, newArr) => {
    arr.map(item => {
        if (item.meta && item.meta.code && menuPermissions.value.includes(item.meta.code)) {
            let children = [];
            if (item.children && item.children.length > 0) {
                children = formatPermission(`${item.path}/`, item.children, children)
            }
            let route = {
                key: `${path}${item.path}`,
                label: item.meta.title,
                icon: () => {
                    return item.meta.icon ? item.meta.icon : null
                },
                activeIcon: () => {
                    return item.meta.activeIcon ? item.meta.activeIcon : null
                }
            }
            if (children && children.length > 0) {
                route['children'] = children
            }
            newArr.push(route);
        }
    });
    return newArr
}
// 找到上层所有id
const findInfintyParentId = (data, target, result) => {
    for (let i in data) {
        let item = data[i]
        if (item.id === target.id) {
            //将查找到的目标数据加入结果数组中
            //可根据需求unshift(item.id)或unshift(item)
            result.unshift(item.id)
            return true
        }
        if (item.children && item.children.length > 0) {
            let ok = findInfintyParentId(item.children, target, result)
            if (ok) {
                result.unshift(item.id)
                return true
            }
        }
    }
    //走到这说明没找到目标
    return false
}
