package com.altescapplication;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.Context;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.app.Activity;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;


import com.airoha.libfota1562.AirohaFotaMgrEx1562;


import android.widget.Toast;

public class AltEscModule extends ReactContextBaseJavaModule {

    public static final int REQUEST_ENABLE_BT = 1;
    private Context context;
    Intent intent;
    CharSequence text = "Hello toast!";
    int duration = Toast.LENGTH_SHORT;

    AltEscModule(ReactApplicationContext context) {
        super(context);
        this.context=context.getApplicationContext();
    }


    // class constructor
    public AltEscModule(Context context){ this.context=context.getApplicationContext(); }

    @Override
    public String getName() {
        return "AltEscModule";
    }

    @ReactMethod
    public void isBluetoothEnabled(Callback callback){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (!mBluetoothAdapter.isEnabled()) {
            callback.invoke("disabled");
        }
        else {
            callback.invoke("active");
        }
    }

    @ReactMethod
    public void enableBluetooth(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (!mBluetoothAdapter.isEnabled()) {
            mBluetoothAdapter.enable();
        }
    }



    @ReactMethod
    public void searchDevices(Callback callback){
        WritableNativeMap re = new WritableNativeMap();
        WritableNativeArray array = new WritableNativeArray();

        try {
            Log.v("invoke searchDevices: ", "true");

            BluetoothAdapter adapter = BluetoothAdapter.getDefaultAdapter();
            adapter.startDiscovery();

            IntentFilter filter = new IntentFilter();

            filter.addAction(BluetoothDevice.ACTION_FOUND);
            filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_STARTED);
            filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);

            BroadcastReceiver mReceiver = new BroadcastReceiver() {
                public void onReceive(Context context, Intent intent) {
                    String action = intent.getAction();
                    if(BluetoothDevice.ACTION_FOUND.equals(action)){
                        BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                        Log.v("deviceName", device.getName());
                    }
                }
            };

            this.context.registerReceiver(mReceiver, filter);
            adapter.startDiscovery();


            re.putArray("payload", array);
            callback.invoke(re);
        } catch (Exception e) {
            callback.invoke(re);
        }
    }


    








    @ReactMethod
    public void responseString(String name, String location, Callback callBack) {
        try{
            Integer eventId = 1;
//            BluetoothService blue = new BluetoothService();

            callBack.invoke("Response a string from native java ");
        }
        catch (Exception e) {
            callBack.invoke("Response errror");
        }
    }

    @ReactMethod
    public void responseList(String params, Callback callback){
        WritableNativeMap re = new WritableNativeMap();
        try {
            WritableNativeArray array = new WritableNativeArray();
            for (int i = 0; i < 5; i++) {
                WritableNativeMap map = new WritableNativeMap();
                String s = Integer.toString(i);
                map.putString("title", s);
                array.pushMap(map);
            }
            re.putArray("payload", array);
            re.putString("params", params);

            callback.invoke(re);
        } catch (Exception e) {
            callback.invoke("error");
        }     
    }

    @ReactMethod
    public void availableDevices(Callback callback){
        WritableNativeMap re = new WritableNativeMap();
        WritableNativeArray array = new WritableNativeArray();

        try {
            BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
//            Set<BluetoothDevice> pairedDevices = mBluetoothAdapter.getBondedDevices();

            List<String> s = new ArrayList<String>();

            mBluetoothAdapter.startDiscovery();

            System.out.println("context");
            System.out.println(this.context);

            IntentFilter filter = new IntentFilter();
            filter.addAction(BluetoothDevice.ACTION_FOUND);
            filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_STARTED);
            filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);

            BroadcastReceiver mReceiver = new BroadcastReceiver() {
                public void onReceive(Context context, Intent intent) {
                    String action = intent.getAction();
                    if(BluetoothDevice.ACTION_FOUND.equals(action)){
                        BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                        WritableNativeMap map = new WritableNativeMap();
                        map.putString("deviceName", device.getName());
                        map.putString("address", device.getAddress());
                        array.pushMap(map);
                    }
                }
            };
            this.context.registerReceiver(mReceiver, filter);

            // appending the paired devices in the response
//            for(BluetoothDevice bt : pairedDevices) {
//                WritableNativeMap map = new WritableNativeMap();
//                map.putString("deviceName", bt.getName());
//                map.putString("address", bt.getAddress());
//                array.pushMap(map);
//            }

            re.putArray("payload", array);
            callback.invoke(re);

        } catch (Exception e) {
            re.putArray("payload", array);
        }
    }

}