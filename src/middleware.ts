import {NextResponse} from "next/server";
 
const allowOrigins = process.env.NODE_ENV === 'production' ? ['https://www.yoursite.com']: ['http://localhost:3000', 'https://www.google.com']

export function middleware(request:Request){
    const origin = request.headers.get('origin')
    if (origin && !allowOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers:{
                'Content-Type': 'text/plain'
            }
        })
    }

    
 console.log("middleware")
}

export const config = {
    matcher: '/api/:path*',
}