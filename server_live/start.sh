#for name in *.jar; do CLASS_PATH=$name:$CLASS_PATH; done
#echo $CLASS_PATH
#for name in libs/*.jar; do CLASS_PATH=$name:$CLASS_PATH; done
#echo $CLASS_PATH
JAVA_OPTS="-server -Xmx4G -Xms1G"
#/opt/jdk1.8.0_121/bin/java $JAVA_OPTS -cp $PWD/resources/:$PWD/*:$PWD/libs/* vn.yotel.yoker.App &
java $JAVA_OPTS -cp $PWD/resources/:$PWD/*:$PWD/libs/* vn.yotel.yoker.App &
PID=$!
echo $PID > ./yoker.pid
