import { NextRequest, NextResponse } from "next/server";

export function DELETE(request: NextRequest, {params}: {params: {id: number}}){

    const id = params.id

    return NextResponse.json({message: 'User Deleted Succesfully', id})
}