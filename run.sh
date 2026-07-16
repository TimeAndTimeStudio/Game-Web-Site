sudo dnf install gdm gnome-terminal nautilus google-noto-sans-thai-fonts google-noto-sans-cjk-fonts tar
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

sudo systemctl enable gdm --now
