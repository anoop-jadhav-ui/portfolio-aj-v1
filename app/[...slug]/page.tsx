import { redirect } from 'next/navigation'

export default function CatchAllPage() {
    redirect('/404')
}
