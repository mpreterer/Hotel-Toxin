#!C:\Python34\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'PyInstaller==3.6','console_scripts','pyi-set_version'
__requires__ = 'PyInstaller==3.6'
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.exit(
        load_entry_point('PyInstaller==3.6', 'console_scripts', 'pyi-set_version')()
    )
