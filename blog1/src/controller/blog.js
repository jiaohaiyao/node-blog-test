// 获取博客列表
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1599467016336,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1599467016336,
            author: 'lisi'
        }
    ]
}
// 获取博客详情
const getDetail = (id) => {
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1599467016336,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title，content
    return {
        id: 3 // 表示新建博客，插入到数据库的id
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('updateBlog:', id, blogData)
    // id是要更新博客的ID
    return true
}

const delBlog = (id) => {
    // id是要删除的博客ID
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}