#import "AltEscModule.h"
#import <React/RCTLog.h>
@import CoreBluetooth;

@implementation RCTAltEscModule

RCT_EXPORT_METHOD(testModule:(NSString *)name)
{
 RCTLogInfo(@"Pretending test %@", name);
}
- (void)centralManagerDidUpdateState:(CBCentralManager *)central {
    RCTLogInfo(@"state:%ld", (long)central.state);
}
- (void)   centralManager:(CBCentralManager *)central
    didDiscoverPeripheral:(CBPeripheral *)peripheral
        advertisementData:(NSDictionary *)advertisementData
                     RSSI:(NSNumber *)RSSI
{
  RCTLogInfo(@"peripheral：%@", peripheral);
}
RCT_EXPORT_METHOD(scanDevice)
{
  self.centralManager = [[CBCentralManager alloc] initWithDelegate:self queue:nil];
  [self.centralManager scanForPeripheralsWithServices:nil options:nil];
  
  RCTLogInfo(@"peripheral：%@", self.peripheral);
}

RCT_EXPORT_MODULE();

@end
