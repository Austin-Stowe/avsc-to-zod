import { z } from "zod";

const baseAvroSchema = z.object({
    type: z.string()
})