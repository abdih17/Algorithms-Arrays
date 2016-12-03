#include <iostream>
using namespace std;

int main () {
    int n=11;
    int dummy;
    int sum=0;
    for (int i=0;i<n;i++) {
        cin >> dummy;
        sum += dummy;
    }
    int o_sum = (n*(n-1))/2;
    cout << sum - o_sum << "\n";
}
