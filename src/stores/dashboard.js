import {ref} from 'vue'
import {defineStore} from 'pinia'
const useVisitorStore = defineStore('visitor',()=>{
    const visitorViewsData=ref([12,43,56,2,4,123,56,23,23,0,23,2])
    const visitorRecordData=ref([
        {
          date: '2023-05-03',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
        {
          date: '2023-05-02',
          count: 1,
          name: '张伟',
          school: '电子科技大学',
        },
        {
          date: '2023-05-04',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
        {
          date: '2023-05-01',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
        {
          date: '2023-05-08',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
        {
          date: '2023-05-06',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
        {
          date: '2023-05-07',
          name: '张伟',
          count: 1,
          school: '电子科技大学',
        },
      ])
    return {
        visitorRecordData,visitorViewsData
    }
})
export default useVisitorStore
