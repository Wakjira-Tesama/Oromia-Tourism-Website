export const baseURL = "http://localhost:4000"

const summeryApi = {
    register:{
        url:'/api/admin/registerAdmin',
        method:"post"
    },
    login:{
        url:'api/admin/login',
        method:"post"
    },
    addDestination:{
        url:'api/places/addPlaces',
        method:"post"
    },
    uploadAvatar:{
        url:"api/file/upload",
        method:"put"
    },
    fetchBooking:{
        url:"api/admin/fetchBooking",
        method:"get"
    }
}

export default summeryApi