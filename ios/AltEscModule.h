//  RCTCalendarModule.h
#import <React/RCTBridgeModule.h>
@import CoreBluetooth;

@interface RCTAltEscModule : NSObject <RCTBridgeModule, CBCentralManagerDelegate>
@property (nonatomic, strong) CBCentralManager *centralManager;
@property (nonatomic, strong) CBPeripheral *peripheral;
@end
