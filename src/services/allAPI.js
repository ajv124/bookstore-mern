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

export const getAllBooksAPI=async()=>{
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