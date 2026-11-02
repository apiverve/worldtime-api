from setuptools import setup, find_packages

setup(
    name='apiverve_worldtime',
    version='1.2.4',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='World Time looks up the current local time, date, and timezone for any city, or for any latitude and longitude. Search by city name to get matching locations with country codes, IANA timezone identifiers, UTC offsets, and formatted times in 12-hour, 24-hour, and ISO 8601 formats.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/worldtime?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
