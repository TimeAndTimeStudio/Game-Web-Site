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
mv steam.desktop ~/.local/share/applications/steam.desktop
chmod +x ~/.local/share/applications/steam.desktop
sudo mkdir /usr/lib/steam
sudo mv bootstraplinux_ubuntu12_32.tar.xz /usr/lib/steam
cd ../
tar -xvf icons.tar.xz
sudo mv icons/* /usr/share/icons/hicolor/*

wget https://github.com/LizardByte/Sunshine/releases/download/v2026.516.143833/Sunshine-2026.516.143833-1.fc44.x86_64.rpm
sudo dnf install ./Sunshine-2026.516.143833-1.fc44.x86_64.rpm

wget https://launcher-files.modrinth.com/versions/0.15.11/linux/Modrinth%20App-0.15.11-1.x86_64.rpm
sudo dnf install ./"Modrinth App-0.15.11-1.x86_64.rpm"

sudo systemctl enable gdm --now
