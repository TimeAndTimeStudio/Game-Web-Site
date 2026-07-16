sudo dnf install gdm gnome-terminal nautilus google-noto-sans-thai-fonts google-noto-sans-cjk-fonts tar wireguard-tools
sudo dnf remove gnome-tour malcontent-control gnome-remote-desktop

sudo dnf config-manager addrepo --from-repofile=https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo dnf install brave-origin

mkdir Downloads
cd Downloads
wget https://game.timeandtime.online/019b913a-a484-7237-b907-2444e37e22e2.png
wget https://game.timeandtime.online/horizontal%20pic.jpg

sudo dnf install plymouth-system-theme
sudo plymouth-set-default-theme -R bgrt
sudo systemctl set-default graphical.target

sudo dnf install glibc.i686 mesa-libGL.i686 libdrm.i686 libnsl.i686
wget https://repo.steampowered.com/steam/archive/stable/steam_latest-stable.tar.gz
wget https://github.com/TimeAndTimeStudio/Game-Web-Site/releases/download/icon/icons.tar.xz

tar -xvf steam_latest-stable.tar.gz
cd steam-launcher
sudo rm steam
sudo mv bin_steam.sh steam
sudo mv steam /usr/bin/
mv steam.desktop ~/.local/share/applications
chmod +x ~/.local/share/applications/steam.desktop
sudo mkdir /usr/lib/steam
sudo mv bootstraplinux_ubuntu12_32.tar.xz /usr/lib/steam
cd ../
tar -xvf icons.tar.xz
sudo mv icons/* /usr/share/icons/hicolor

wget https://github.com/moonlight-stream/moonlight-qt/releases/download/v6.1.0/Moonlight-6.1.0-x86_64.AppImage

sudo systemctl enable gdm --now
