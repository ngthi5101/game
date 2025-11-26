q=$1
d=$2
p=$3
if [ "$q" == "_" ]; then
    q=""
fi
if [ "$d" == "_" ]; then
    d=""
fi
if [ "$p" == "_" ]; then
    p=""
fi
if [ "$d" == "" ]; then
    d="log"
else
    d="archive/log.$d"
fi
s=$d
if [ "$p" == "" ]; then
    s="$s/chat/*"
else
    s="$s/chat/$p"
fi
for f in $s*
do
    grep --binary-files=text "$q:" $f
    OUT=$?
    if [ $OUT -eq 0 ]; then
	if [ "$d" == "log" ]; then
            echo "<a href='javascript:listChatInPlace(\"${f:15}\")'>${f:15}</a>"
	    echo
	else
            echo "<a href='javascript:listChatInPlace(\"${f:32}\")'>${f:32}</a>"
	    echo
	fi
    fi
done
exit
