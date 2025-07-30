#!/usr/bin/env python3
"""
Educational ARP Spoofing Detection Script
FOR EDUCATIONAL PURPOSES ONLY - Use only on your own network
"""

import scapy.all as scapy
import time
import sys
from collections import defaultdict

class ARPSpoofingDetector:
    def __init__(self):
        self.arp_table = defaultdict(list)
        self.suspicious_ips = set()
    
    def get_mac(self, ip):
        """Get MAC address for given IP"""
        try:
            arp_request = scapy.ARP(pdst=ip)
            broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
            arp_request_broadcast = broadcast/arp_request
            answered_list = scapy.srp(arp_request_broadcast, timeout=1, verbose=False)[0]
            return answered_list[0][1].hwsrc
        except:
            return None
    
    def process_packet(self, packet):
        """Process ARP packets and detect spoofing"""
        if packet.haslayer(scapy.ARP) and packet[scapy.ARP].op == 2:
            # ARP Response packet
            real_mac = self.get_mac(packet[scapy.ARP].psrc)
            response_mac = packet[scapy.ARP].hwsrc
            
            if real_mac and real_mac != response_mac:
                print(f"[!] ARP Spoofing Detected!")
                print(f"    IP: {packet[scapy.ARP].psrc}")
                print(f"    Real MAC: {real_mac}")
                print(f"    Spoofed MAC: {response_mac}")
                print("-" * 50)
                
                self.suspicious_ips.add(packet[scapy.ARP].psrc)
    
    def start_detection(self, interface="eth0"):
        """Start ARP spoofing detection"""
        print(f"[*] Starting ARP Spoofing Detection on {interface}")
        print("[*] Press Ctrl+C to stop")
        print("=" * 50)
        
        try:
            scapy.sniff(iface=interface, store=False, prn=self.process_packet)
        except KeyboardInterrupt:
            print("\n[!] Detection stopped by user")
            self.print_summary()
    
    def print_summary(self):
        """Print detection summary"""
        if self.suspicious_ips:
            print(f"\n[!] {len(self.suspicious_ips)} suspicious IP(s) detected:")
            for ip in self.suspicious_ips:
                print(f"    - {ip}")
        else:
            print("\n[+] No ARP spoofing detected")

def main():
    print("🛡️  ARP Spoofing Detection Tool (Educational)")
    print("=" * 50)
    print("⚠️  FOR EDUCATIONAL PURPOSES ONLY")
    print("⚠️  Use only on your own network")
    print("=" * 50)
    
    detector = ARPSpoofingDetector()
    
    # Get interface from user
    interface = input("Enter network interface (default: eth0): ").strip()
    if not interface:
        interface = "eth0"
    
    try:
        detector.start_detection(interface)
    except Exception as e:
        print(f"[!] Error: {e}")
        print("[!] Make sure you have proper permissions")

if __name__ == "__main__":
    main() 