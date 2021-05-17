import { MongoConnection } from "@/service/connect/mongoConnection";
import { ConnectionManager } from "@/service/connectionManager";
import { MongoClient } from "mongodb";
import { Node } from "../interface/node";

export class MonggoBaseNode extends Node{

    public async getClient(): Promise<MongoClient> {
        const redis = (await ConnectionManager.getConnection(this)) as MongoConnection
        return new Promise(res => { redis.run(res) })
    }

    
}