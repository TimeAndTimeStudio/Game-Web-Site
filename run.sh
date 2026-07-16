sudo dnf install gdm gnome-terminal 
sudo dnf remove gnome-tour
sudo dnf install nautilus
sudo dnf remove malcontent-control
sudo dnf install google-noto-sans-thai-fonts google-noto-sans-cjk-fonts
sudo dnf remove gnome-remote-desktop

sudo dnf config-manager addrepo --from-repofile=https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo dnf install brave-origin

mkdir Downloads
cd Downloads
wget https://game.timeandtime.online/019b913a-a484-7237-b907-2444e37e22e2.png
wget https://game.timeandtime.online/horizontal%20pic.jpg

sudo firewall-cmd --remove-service=ssh --remove-service=mdns --remove-service=dhcpv6-client --permanent

sudo systemctl set-default graphical.target

sudo systemctl enable gdm --now
