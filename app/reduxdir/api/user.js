import { fetchJSONByPost } from 'utils/public'

// 获取用户列表
export const getUserList = fetchJSONByPost('/interface/getlist')
