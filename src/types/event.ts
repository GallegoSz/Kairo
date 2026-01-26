export type Event = {
    id: number
    name: string
    obs: string
    start: Date
    end: Date
    type: "sector" | "personal"
}