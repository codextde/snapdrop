import { Module } from "@nestjs/common";
import { LocalNetworkService } from "./local-network.service";

@Module({
  imports: [
    
  ],
  controllers: [],
  providers: [ LocalNetworkService],
})
export class AppModule {}
