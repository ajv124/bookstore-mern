import apiService from "../api/apiService";

export const registerAPI=async(userData)=>{
    return await apiService("POST","/register",userData)
}

export const loginAPI=async(userData)=>{
    return await apiService("POST","/login",userData)
}

export const googleLoginAPI=async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

export const userUpdateAPI=async(userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

export const addBookAPI=async (bookDetails)=>{
    return await apiService("POST",'/book',bookDetails)
}

export const getHomeBooksAPI=async()=>{
    return await apiService("GET",`/home-books`,{})
}

export const getAllBooksAPI=async(searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

export const getUserBooksAPI=async()=>{
    return await apiService("GET",`/user-books`,{})
}

export const getUserBoughtBooksAPI=async()=>{
    return await apiService("GET",`/bought-books`,{})
}

export const deleteUserBookAPI=async(bookId)=>{
    return await apiService("DELETE",`/book/${bookId}`,{})
}

export const viewBookAPI=async (id)=>{
    return await apiService("GET",`/view-book/${id}`,{})
}

export const adminUpdateAPI=async(adminId,adminData)=>{
    return await apiService("PUT",`/admin/${adminId}`,adminData)
}

export const userListAPI=async()=>{
    return await apiService('GET',`/user-list`,{})
}

export const bookListAPI=async()=>{
    return await apiService('GET',`/book-list`,{})
}

export const editBookStatusAPI=async(id)=>{
    return await apiService('PUT',`/book/${id}`,{})
}

export const getBookDetailsAIAPI=async (title)=>{
    return await apiService('POST','/book-ai',{title})
}