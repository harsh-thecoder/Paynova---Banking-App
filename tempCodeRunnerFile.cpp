#include<bits/stdc++.h>
using namespace std;
#define ll long long

int main()
{
    ll t;
    cin>>t;
    while(t--)
    {
        string s;
        cin>>s;
        
        ll ans = 1e18;
        ll n = s.size();
        ll nonzero = 0;
        for(ll i=0;i<s.size();i++)
        {
            if(s[i] == '0')
            {
                continue;
            }
            ll temp_ans = nonzero;
            temp_ans += (n - (i+1));
            ans = min(ans,temp_ans);
            if(s[i] != '0')
            {
                nonzero++;
            }
        }

        cout<<ans<<endl;
    }

}