sudo dnf install gdm gnome-terminal 
sudo dnf remove gnome-tour malcontent
sudo dnf install thunar

# sudo dnf install dnf-plugins-core

sudo dnf config-manager addrepo --from-repofile=https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo dnf install brave-origin

cd Downloads
wget https://github.com/TimeAndTimeStudio/Game-Web-Site/blob/main/019b913a-a484-7237-b907-2444e37e22e2.png
wget https://github.com/TimeAndTimeStudio/Game-Web-Site/blob/main/horizontal%20pic.jpg

sudo systemctl enable gdm --now
sudo systemctl set-default graphical.target
