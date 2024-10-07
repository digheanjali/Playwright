const { test, expect } = require('@playwright/test')
const exp = require('constants')
const { request } = require('http')
let emailId = `anjalidighe${Math.floor(Math.random() * 999)}@gmail.com`
let id = undefined

test('List of User GET Api', async ({ request }) => {
    let req1 = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
        }
    })

    // console.log(req1)
    let res1 = await req1.json()
    console.log(res1)
    expect(res1.length).toBe(10)
    expect(req1.status()).toBe(200)
    console.log(req1.status())
    console.log(res1[0])


})


test('create user api', async ({ request }) => {

    let req2 = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": " Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
        },
        data: {
            "name": "anjali dighe",
            "gender": "female",
            "email": emailId,
            "status": "active"
        }
    })

    let res2 = await req2.json()
    console.log(res2)
    id = res2.id
    expect(req2.status()).toBe(201)
    console.log(req2.status())
    expect(res2.name).toBe('anjali dighe')
    expect(res2.gender).toBe('female')
    expect(res2.status).toBe('active')
    console.log(id) //7446409

})


test('update uasr api', async ({ request }) => {

    let req3 = await request.put(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": " Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
        },
        data: {
            "name": "siya dighe",
            "gender": "female",
            "email": emailId,
            "status": "inactive"
        }
    })
    let res3 = await req3.json()
    // console.log(res3)
    // console.log(req3.status())
    await expect(res3.name).toBe('siya dighe')
    await expect(res3.status).toBe('inactive')
    await (expect(res3.gender)).toBe('female')
    // id = res3.id
    // console.log(id)

})


test('delete user api', async ({ request }) => {
    let req4 = await request.delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": " Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
        }
    })

    let res4 = await req4.json()
    // console.log(res4)
    await expect(req4.status()).toBe(404)
})